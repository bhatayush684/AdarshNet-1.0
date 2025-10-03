import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { villages } from '@/lib/dummyData';
import { useState } from 'react';

const VillageMap = () => {
  const [selectedVillage, setSelectedVillage] = useState<string | null>(null);

  // Create a simple grid-based map visualization
  const mapPositions = [
    { id: 'V001', x: 20, y: 30 },
    { id: 'V002', x: 45, y: 25 },
    { id: 'V003', x: 70, y: 35 },
    { id: 'V004', x: 30, y: 55 },
    { id: 'V005', x: 60, y: 50 },
    { id: 'V006', x: 80, y: 60 },
    { id: 'V007', x: 15, y: 70 },
    { id: 'V008', x: 40, y: 75 },
    { id: 'V009', x: 65, y: 80 },
    { id: 'V010', x: 85, y: 75 },
  ];

  const getVillageByPosition = (posId: string) => {
    return villages.find(v => v.id === posId);
  };

  const selected = selectedVillage ? getVillageByPosition(selectedVillage) : null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interactive Village Map</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full aspect-video bg-muted/30 rounded-lg border-2 border-border overflow-hidden">
          {/* Map background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
          
          {/* Village markers */}
          {mapPositions.map((pos) => {
            const village = getVillageByPosition(pos.id);
            if (!village) return null;

            return (
              <div
                key={pos.id}
                className="absolute cursor-pointer group"
                style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)' }}
                onClick={() => setSelectedVillage(selectedVillage === pos.id ? null : pos.id)}
              >
                {/* Marker pin */}
                <div className="relative">
                  <div className={`w-8 h-8 rounded-full ${selectedVillage === pos.id ? 'bg-primary scale-125' : 'bg-secondary'} border-2 border-white shadow-lg transition-all duration-200 group-hover:scale-110 flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{village.name.slice(-1)}</span>
                  </div>
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block">
                    <div className="bg-card border border-border px-2 py-1 rounded shadow-lg whitespace-nowrap text-xs">
                      {village.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected village info */}
        {selected && (
          <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">{selected.name}</h3>
              <Badge variant="secondary">Population: {selected.population.toLocaleString()}</Badge>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-muted-foreground">Electrification:</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${selected.electrification}%` }}></div>
                  </div>
                  <span className="font-medium">{selected.electrification}%</span>
                </div>
              </div>
              <div>
                <span className="text-muted-foreground">Sanitation:</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: `${selected.sanitation}%` }}></div>
                  </div>
                  <span className="font-medium">{selected.sanitation}%</span>
                </div>
              </div>
              <div>
                <span className="text-muted-foreground">Healthcare:</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: `${selected.healthcare}%` }}></div>
                  </div>
                  <span className="font-medium">{selected.healthcare}%</span>
                </div>
              </div>
              <div>
                <span className="text-muted-foreground">Education:</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${selected.education}%` }}></div>
                  </div>
                  <span className="font-medium">{selected.education}%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VillageMap;
