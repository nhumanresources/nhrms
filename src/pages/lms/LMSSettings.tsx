import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Key, Eye, EyeOff, CheckCircle2, ExternalLink, Bot, Shield } from 'lucide-react';
import { getStoredApiKey, setStoredApiKey, clearStoredApiKey } from '@/services/claudeService';
import LMSLayout from '@/components/lms/LMSLayout';

export default function LMSSettings() {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    const stored = getStoredApiKey();
    setHasKey(!!stored);
    if (stored) setApiKey(stored);
  }, []);

  const handleSave = () => {
    if (!apiKey.trim()) {
      toast({ variant: 'destructive', title: 'API key required', description: 'Please enter your Claude API key.' });
      return;
    }
    if (!apiKey.startsWith('sk-ant-')) {
      toast({ variant: 'destructive', title: 'Invalid key format', description: 'Claude API keys start with "sk-ant-".' });
      return;
    }
    setStoredApiKey(apiKey.trim());
    setHasKey(true);
    toast({ title: 'API Key Saved', description: 'Your Claude API key has been stored locally.' });
  };

  const handleClear = () => {
    clearStoredApiKey();
    setApiKey('');
    setHasKey(false);
    toast({ title: 'API Key Removed', description: 'Your API key has been cleared.' });
  };

  return (
    <LMSLayout>
      <div className="max-w-2xl space-y-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Settings</h2>
          <p className="text-sm text-gray-500 mt-0.5">Configure your LMS and Claude AI integration</p>
        </div>

        {/* API Key */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Key className="h-4 w-4" />
              Claude API Key
            </CardTitle>
            <CardDescription>
              Connect your Claude API key to enable AI-powered course generation.
              Your key is stored locally in your browser only.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {hasKey && (
              <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                <CheckCircle2 className="h-4 w-4" />
                API key is configured
              </div>
            )}

            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  type={showKey ? 'text' : 'password'}
                  value={apiKey}
                  onChange={e => setApiKey(e.target.value)}
                  placeholder="sk-ant-..."
                  className="pr-10 font-mono text-sm"
                />
                <button
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <Button onClick={handleSave}>Save Key</Button>
              {hasKey && (
                <Button variant="outline" onClick={handleClear} className="text-red-500 hover:text-red-700">
                  Clear
                </Button>
              )}
            </div>

            <p className="text-xs text-gray-400">
              Get your API key from{' '}
              <a
                href="https://console.anthropic.com/settings/keys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                console.anthropic.com <ExternalLink className="h-3 w-3" />
              </a>
            </p>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Bot className="h-4 w-4" />
              About Claude Integration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-gray-600">
            <p>
              The nHRMS LMS uses Claude AI to help you build professional courses efficiently.
              Claude can:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Generate complete course outlines from a topic description</li>
              <li>Write detailed lesson content with examples and scenarios</li>
              <li>Create quiz questions with explanations</li>
              <li>Review and suggest improvements to existing content</li>
            </ul>
            <p className="text-xs text-gray-400 mt-4">
              All AI-generated content should be reviewed before publishing. Claude uses the
              Sonnet model for fast, high-quality content generation.
            </p>
          </CardContent>
        </Card>

        {/* Privacy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Shield className="h-4 w-4" />
              Privacy & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-600">
            <p>Your API key is stored only in your browser's local storage and is never sent to nHRMS servers.</p>
            <p>Course content is sent directly to the Anthropic API for generation. Review Anthropic's privacy policy for details on data handling.</p>
          </CardContent>
        </Card>
      </div>
    </LMSLayout>
  );
}
