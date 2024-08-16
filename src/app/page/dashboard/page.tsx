'use client';
import React, { ChangeEvent, useState } from 'react';
import DashboardComponent from '@/components/Dashboard/DashboardComponent';
import { Card, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch'; // Import Shadcn Switch
import { useRecoilState } from 'recoil';
import { dashboardState } from '../../../../Recoil/Atoms/DashboardAtom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { aiConfigState } from '../../../../Recoil/Atoms/AiConfigAtom';

const initPrompt = `**Prompt:**

Please create a JSON configuration for a dashboard with the following details:

**1. Dashboard Metadata:**
- **ID:** '[dashboard-id]'
- **Title:** '[Dashboard Title]'

**2. Widgets Configuration:**

**Widget 1:**
- **ID:** '[widget-id-1]'
- **Type:** '[chart/table/map]'  // Specify the type of widget
- **Title:** '[Widget Title]'
- **Data Configuration:**

  **For Chart Widgets:**
  - **Chart Type:** '[chart-type]'  // e.g., "pie", "bar", "line"
  - **Background Color:** '#ffffff'
  - **Border Radius:** '10'
  - **Title:**
    - **Text:** '[Chart Title]'
    - **Style:**
      - **Color:** '#2d3436'
      - **Font Weight:** 'bold'
  - **xAxis:**
    - **Categories:** '[ "Category1", "Category2", "Category3" ]'
    - **Title:**
      - **Text:** '[X-Axis Title]'
      - **Style:**
        - **Color:** '#636e72'
        - **Font Size:** '14px'
    - **Labels Style:**
      - **Color:** '#636e72'
      - **Font Size:** '12px'
  - **yAxis:**
    - **Title:**
      - **Text:** '[Y-Axis Title]'
      - **Style:**
        - **Color:** '#636e72'
        - **Font Size:** '14px'
    - **Grid Line Color:** '#dfe6e9'
  - **Series:**
    - **Name:** '[Series Name]'
    - **Data:** '[ 100, 200, 300 ]'  // Array of data points
    - **Color:** '#0984e3'
  - **Tooltip:**
    - **Point Format:** '{point.name}: <b>{point.y}</b>'
    - **Background Color:** '#dfe6e9'
    - **Border Color:** '#0984e3'
    - **Style:** '{ "color": "#2d3436" }'

  **For Table Widgets:**
  - **Columns:**
    - '[ { "header": "Column Header", "key": "columnKey" } ]'
  - **Rows:**
    - '[ { "columnKey": "value" } ]'

  **For Map Widgets:**
  - **Map Type:** '[map-type]'  // e.g., "world"
  - **Series:**
    - **Name:** '[Series Name]'
    - **Data:** '[ [ "regionCode", value ] ]'
    - **Map Data:** '[map-data]'
    - **Color:** '#0984e3'
  - **Tooltip:**
    - **Point Format:** '{point.name}: <b>{point.value}</b>'
    - **Background Color:** '#dfe6e9'
    - **Border Color:** '#0984e3'
    - **Style:** '{ "color": "#2d3436" }'

- **Style Configuration:**
  - **Resize:** 'both'
  - **Overflow:** 'auto'
  - **Width:** '[width]'
  - **Height:** '[height]'
  - **Margin:** '[margin]'
  - **Background Color:** '[background-color]'
  - **Box Shadow:** '[box-shadow]'
  - **Border Radius:** '[border-radius]'
  - **Opacity:** '[opacity]'
  - **Cursor:** '[cursor]'

**Sample JSON Configuration:**

json
{
  "id": "dashboard-001",
  "title": "Sample Dashboard",
  "widgets": [
    {
      "id": "widget-001",
      "type": "chart",
      "title": "Sales Distribution",
      "data": {
        "chart": {
          "type": "pie",
          "backgroundColor": "#ffffff",
          "borderRadius": 10
        },
        "title": {
          "text": "Sales by Product",
          "style": {
            "color": "#2d3436",
            "fontWeight": "bold"
          }
        },
        "series": [
          {
            "name": "Products",
            "colorByPoint": true,
            "data": [
              { "name": "Product A", "y": 40, "color": "#74b9ff" },
              { "name": "Product B", "y": 30, "color": "#fd79a8" },
              { "name": "Product C", "y": 20, "color": "#00b894" },
              { "name": "Product D", "y": 10, "color": "#ffeaa7" }
            ]
          }
        ],
        "tooltip": {
          "pointFormat": "{point.name}: <b>{point.y}%</b>",
          "backgroundColor": "#dfe6e9",
          "borderColor": "#74b9ff",
          "style": { "color": "#2d3436" }
        }
      },
      "style": {
        "resize": "both",
        "overflow": "auto",
        "width": "600px",
        "height": "400px",
        "margin": "20px",
        "backgroundColor": "#f5f6fa",
        "boxShadow": "rgba(0, 0, 0, 0.1) 0px 6px 12px",
        "borderRadius": "12px",
        "opacity": "1",
        "cursor": "move"
      }
    },
    {
      "id": "widget-002",
      "type": "table",
      "title": "Top Products",
      "columns": [
        { "header": "Product Name", "key": "name" },
        { "header": "Sales", "key": "sales" },
        { "header": "Category", "key": "category" }
      ],
      "rows": [
        { "name": "Product A", "sales": 15000, "category": "Electronics" },
        { "name": "Product B", "sales": 12000, "category": "Furniture" },
        { "name": "Product C", "sales": 9000, "category": "Clothing" }
      ],
      "style": {
        "resize": "both",
        "overflow": "auto",
        "width": "600px",
        "height": "300px",
        "margin": "20px",
        "backgroundColor": "#ffffff",
        "boxShadow": "0 6px 12px rgba(0,0,0,0.1)",
        "borderRadius": "12px",
        "padding": "20px"
      }
    }
  ]
}Provide such json for `;


const DashboardPage: React.FC = () => {
  const [dashboard, setDashboard] = useRecoilState(dashboardState);
  const [isAiMode, setIsAiMode] = useState(false);
  const [prompt, setPrompt] = useState('');

  const [aiConfig, setAiConfig] = useRecoilState(aiConfigState);

  const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAiConfig({...aiConfig,apiKey:event.target.value});
  };

  const handleModelChange = (value: string) => {
    setAiConfig({ ...aiConfig, model: value });
  };

  const saveAiConfig = () => {
    setAiConfig(aiConfig);
    localStorage.setItem('aiConfig', JSON.stringify(aiConfig));
  };

  React.useEffect(() => {
    const storedConfig = localStorage.getItem('aiConfig');
    if (storedConfig) {
      const parsedConfig = JSON.parse(storedConfig);
      setAiConfig(parsedConfig);
    }
  }, [setAiConfig]);


  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsedData = JSON.parse(event.target?.result as string);
        setDashboard(parsedData);
      } catch (error) {
        console.error('Error parsing file:', error);
      }
    };
    reader.readAsText(file);
  };

  const handlePromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmitPrompt = async () => {
    try {
      saveAiConfig();
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${aiConfig.apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            response_format: { type: 'json_object' },
            model: aiConfig.model,
            messages: [
              {
                role: 'user',
                content: `${initPrompt} ${prompt}`,
              },
            ],
          }),
        }
      );
      const data = await response.json();
      const jDash = await JSON.parse(data.choices[0].message.content);
      setDashboard(jDash);
    } catch (error) {
      console.error('Error sending prompt to OpenAI:', error);
    }
  };

  if (!dashboard.id) {
    return (
      <div className='h-screen mx-auto w-fit text-center'>
        <Card className='p-2 w-screen'>
          <CardTitle className='my-2'>Dashboard</CardTitle>
          <Switch
            id='mode-switch'
            className='my-2'
            checked={isAiMode}
            onCheckedChange={() => setIsAiMode((prev) => !prev)}
          />
          <span className='ml-2'>{isAiMode ? 'AI Mode' : 'Upload Mode'}</span>
          {!isAiMode ? (
            <Input
              id='dashboard'
              type='file'
              accept='.chartx'
              onChange={handleFileUpload}
            />
          ) : (
            <div className='mt-4'>
              <div>
                <Input
                  type='text'
                  placeholder='OPEN AI API Key'
                  className='my-3'
                  value={aiConfig.apiKey}
                  onChange={handleApiKeyChange}
                />
                <Select value={aiConfig.model} onValueChange={handleModelChange}>
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='Select an OpenAI Model' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>OpenAI Models</SelectLabel>
                      <SelectItem value='gpt-4o-mini-2024-07-18'>
                        GPT-4o
                      </SelectItem>
                      <SelectItem value='gpt-4o-mini'>GPT-4o mini</SelectItem>
                      <SelectItem value='gpt-4-turbo'>GPT-4 Turbo</SelectItem>
                      <SelectItem value='gpt-4'>GPT-4</SelectItem>
                      <SelectItem value='gpt-3.5-turbo'>
                        GPT-3.5 Turbo
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              <Textarea
                id='prompt'
                placeholder='Enter your prompt'
                value={prompt}
                onChange={handlePromptChange}
              />
              <Button className='mt-4' onClick={handleSubmitPrompt}>
                Submit Prompt
              </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    );
  }

  return (
    <div>
      {dashboard.title && (
        <div className='text-center p-2'>
          <CardTitle>{dashboard.title}</CardTitle>
        </div>
      )}
      <DashboardComponent />
    </div>
  );
};

export default DashboardPage;
