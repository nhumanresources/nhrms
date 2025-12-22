import { useState, useMemo } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Clock,
  Hourglass
} from 'lucide-react';
import { labourLawCompliances, type ComplianceItem } from '@/data/complianceCalendar';
import { format, isSameDay, addMonths, subMonths, startOfMonth, isToday, parseISO, setDate as setDayOfMonth, getDate } from 'date-fns';
import { cn } from '@/lib/utils';

// Helper to extract due dates from compliance items and convert to actual dates
const getComplianceDatesForMonth = (date: Date): { date: Date; items: ComplianceItem[] }[] => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const result: { date: Date; items: ComplianceItem[] }[] = [];
  
  labourLawCompliances.forEach(item => {
    const dueDate = item.dueDate.toLowerCase();
    
    // Parse "15th of every month" pattern
    const monthlyMatch = dueDate.match(/(\d+)(?:st|nd|rd|th)\s+of\s+every\s+month/i);
    if (monthlyMatch) {
      const day = parseInt(monthlyMatch[1]);
      const complianceDate = new Date(year, month, day);
      const existing = result.find(r => isSameDay(r.date, complianceDate));
      if (existing) {
        existing.items.push(item);
      } else {
        result.push({ date: complianceDate, items: [item] });
      }
    }
    
    // Parse "Last day of every month" pattern
    if (dueDate.includes('last day')) {
      const lastDay = new Date(year, month + 1, 0);
      const existing = result.find(r => isSameDay(r.date, lastDay));
      if (existing) {
        existing.items.push(item);
      } else {
        result.push({ date: lastDay, items: [item] });
      }
    }
    
    // Parse quarterly patterns
    if (item.frequency === 'Quarterly') {
      const quarterDates: { month: number; day: number }[] = [];
      
      if (dueDate.includes('25th of month following quarter')) {
        quarterDates.push(
          { month: 0, day: 25 }, // Jan
          { month: 3, day: 25 }, // Apr
          { month: 6, day: 25 }, // Jul
          { month: 9, day: 25 }  // Oct
        );
      }
      
      if (dueDate.includes('jul 31')) quarterDates.push({ month: 6, day: 31 });
      if (dueDate.includes('oct 31')) quarterDates.push({ month: 9, day: 31 });
      if (dueDate.includes('jan 31')) quarterDates.push({ month: 0, day: 31 });
      if (dueDate.includes('may 31')) quarterDates.push({ month: 4, day: 31 });
      
      quarterDates.forEach(qd => {
        if (qd.month === month) {
          const complianceDate = new Date(year, month, qd.day);
          const existing = result.find(r => isSameDay(r.date, complianceDate));
          if (existing) {
            existing.items.push(item);
          } else {
            result.push({ date: complianceDate, items: [item] });
          }
        }
      });
    }
    
    // Parse half-yearly patterns
    if (item.frequency === 'Half-Yearly') {
      const halfYearlyDates: { month: number; day: number }[] = [];
      
      if (dueDate.includes('jun 15')) halfYearlyDates.push({ month: 5, day: 15 });
      if (dueDate.includes('jan 15')) halfYearlyDates.push({ month: 0, day: 15 });
      if (dueDate.includes('nov 11')) halfYearlyDates.push({ month: 10, day: 11 });
      if (dueDate.includes('may 12')) halfYearlyDates.push({ month: 4, day: 12 });
      if (dueDate.includes('15th jan')) halfYearlyDates.push({ month: 0, day: 15 });
      if (dueDate.includes('15th jul')) halfYearlyDates.push({ month: 6, day: 15 });
      
      halfYearlyDates.forEach(hd => {
        if (hd.month === month) {
          const complianceDate = new Date(year, month, hd.day);
          const existing = result.find(r => isSameDay(r.date, complianceDate));
          if (existing) {
            existing.items.push(item);
          } else {
            result.push({ date: complianceDate, items: [item] });
          }
        }
      });
    }
    
    // Parse annual patterns
    if (item.frequency === 'Annual') {
      const annualDates: { month: number; day: number }[] = [];
      
      if (dueDate.includes('april 25')) annualDates.push({ month: 3, day: 25 });
      if (dueDate.includes('march 31')) annualDates.push({ month: 2, day: 31 });
      if (dueDate.includes('january 31')) annualDates.push({ month: 0, day: 31 });
      if (dueDate.includes('january 21')) annualDates.push({ month: 0, day: 21 });
      if (dueDate.includes('december 31')) annualDates.push({ month: 11, day: 31 });
      
      annualDates.forEach(ad => {
        if (ad.month === month) {
          const complianceDate = new Date(year, month, ad.day);
          const existing = result.find(r => isSameDay(r.date, complianceDate));
          if (existing) {
            existing.items.push(item);
          } else {
            result.push({ date: complianceDate, items: [item] });
          }
        }
      });
    }
  });
  
  return result.sort((a, b) => a.date.getTime() - b.date.getTime());
};

interface ComplianceCalendarViewProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export default function ComplianceCalendarView({ selectedDate, onDateChange }: ComplianceCalendarViewProps) {
  const [currentMonth, setCurrentMonth] = useState<Date>(startOfMonth(selectedDate));
  
  const complianceDates = useMemo(() => 
    getComplianceDatesForMonth(currentMonth), 
    [currentMonth]
  );
  
  const highlightedDays = useMemo(() => 
    complianceDates.map(cd => cd.date),
    [complianceDates]
  );
  
  const selectedDateCompliances = useMemo(() => 
    complianceDates.find(cd => isSameDay(cd.date, selectedDate))?.items || [],
    [complianceDates, selectedDate]
  );
  
  const upcomingEvents = useMemo(() => {
    const today = new Date();
    return complianceDates
      .filter(cd => cd.date >= today)
      .slice(0, 5);
  }, [complianceDates]);
  
  const handlePrevMonth = () => {
    setCurrentMonth(prev => subMonths(prev, 1));
  };
  
  const handleNextMonth = () => {
    setCurrentMonth(prev => addMonths(prev, 1));
  };
  
  const handleToday = () => {
    const today = new Date();
    setCurrentMonth(startOfMonth(today));
    onDateChange(today);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Calendar Section */}
      <div className="lg:col-span-2">
        <Card className="overflow-hidden shadow-lg">
          <CardHeader className="bg-muted/30 border-b border-border pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handlePrevMonth}
                  className="h-9 w-9"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleNextMonth}
                  className="h-9 w-9"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={handleToday}
                  className="ml-2"
                >
                  today
                </Button>
              </div>
              <CardTitle className="text-xl font-bold text-primary">
                {format(currentMonth, 'MMMM yyyy')}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="w-full overflow-x-auto">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && onDateChange(date)}
                month={currentMonth}
                onMonthChange={setCurrentMonth}
                className="w-full"
                classNames={{
                  months: "w-full",
                  month: "w-full",
                  table: "w-full border-collapse",
                  head_row: "flex w-full",
                  head_cell: "flex-1 text-center text-primary font-semibold py-2 text-sm",
                  row: "flex w-full",
                  cell: "flex-1 aspect-square relative p-0.5",
                  day: cn(
                    "w-full h-full flex items-center justify-center rounded-lg text-sm transition-colors",
                    "hover:bg-muted cursor-pointer"
                  ),
                  day_selected: "bg-primary text-primary-foreground hover:bg-primary",
                  day_today: "bg-secondary text-secondary-foreground font-bold",
                  day_outside: "text-muted-foreground/40",
                }}
                modifiers={{
                  hasCompliance: highlightedDays,
                }}
                modifiersClassNames={{
                  hasCompliance: "bg-primary/20 text-primary font-semibold"
                }}
                components={{
                  IconLeft: () => null,
                  IconRight: () => null,
                }}
                showOutsideDays
              />
            </div>
            
            {/* Legend */}
            <div className="flex items-center gap-6 mt-6 pt-4 border-t border-border justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-primary/20 border border-primary/40" />
                <span className="text-sm text-muted-foreground">Compliance Due Date</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-secondary" />
                <span className="text-sm text-muted-foreground">Today</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-primary" />
                <span className="text-sm text-muted-foreground">Selected</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Events Sidebar */}
      <div className="lg:col-span-1">
        <Card className="overflow-hidden shadow-lg h-full">
          <CardHeader className="bg-primary text-primary-foreground py-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <CalendarIcon className="w-5 h-5" />
              Ongoing & Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {upcomingEvents.length > 0 ? (
              <div className="divide-y divide-border">
                {upcomingEvents.map((event, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "p-4 hover:bg-muted/50 transition-colors cursor-pointer",
                      isSameDay(event.date, selectedDate) && "bg-primary/5 border-l-4 border-l-primary"
                    )}
                    onClick={() => onDateChange(event.date)}
                  >
                    <h4 className="font-semibold text-foreground mb-2">
                      {event.items[0].requirement}
                      {event.items.length > 1 && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          +{event.items.length - 1} more
                        </Badge>
                      )}
                    </h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{format(event.date, 'EEEE, MMMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Hourglass className="w-4 h-4 text-primary" />
                        <span>12:00 AM - 11:59 PM</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDateChange(event.date);
                      }}
                    >
                      Click for details
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                <CalendarIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No upcoming events this month</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Selected Date Details */}
      {selectedDateCompliances.length > 0 && (
        <div className="lg:col-span-3">
          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="bg-secondary/10 border-b border-border">
              <CardTitle className="text-lg">
                Compliances Due on {format(selectedDate, 'MMMM d, yyyy')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedDateCompliances.map((item) => (
                  <Card key={item.id} className="border border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <Badge className="mb-2" variant="outline">
                        {item.frequency}
                      </Badge>
                      <h4 className="font-semibold text-foreground mb-2">
                        {item.requirement}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <strong>Act:</strong> {item.act}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <strong>Form:</strong> {item.formNo}
                      </p>
                      {item.penalty && (
                        <p className="text-xs text-destructive mt-2">
                          <strong>Penalty:</strong> {item.penalty}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
