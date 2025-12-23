// // src/BlueprintDiagram.tsx
// import React, { useState, useRef } from 'react';

// // Type definitions
// interface BlueprintInput {
//   id: string;
//   value: string;
// }

// interface Phase {
//   title: string;
//   steps: string[];
// }

// interface BlueprintData {
//   title?: string;
//   service?: string;
//   summary?: string;
//   inputs?: BlueprintInput[];
//   phases?: Phase[];
// }

// interface BlueprintDiagramProps {
//   blueprint: BlueprintData;
//   title?: string;
// }

// const BlueprintDiagram: React.FC<BlueprintDiagramProps> = ({ blueprint, title }) => {
//   if (!blueprint?.phases?.length) return null;

//   const heading = title || blueprint.title || "Blueprint";

//   return (
//     <div className="w-full bg-white rounded-xl p-6">
//       {/* Header */}
//       <div className="flex items-start justify-between gap-4 mb-5">
//         <div>
//           <div className="text-xl font-bold text-gray-900">{heading}</div>
//           <div className="text-sm text-gray-600">
//             {blueprint.service ? `Service: ${blueprint.service}` : "Service blueprint"}
//           </div>
//         </div>

//         <div className="text-[11px] px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
//           EVO AI
//         </div>
//       </div>

//       {/* Summary */}
//       {blueprint.summary && (
//         <div className="mb-5 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
//           <div className="text-[11px] font-semibold text-gray-500 mb-1">SUMMARY</div>
//           <div className="text-sm text-gray-800 leading-snug">{blueprint.summary}</div>
//         </div>
//       )}

//       {/* Inputs */}
//       {Array.isArray(blueprint.inputs) && blueprint.inputs.length > 0 && (
//         <div className="mb-6">
//           <div className="text-[12px] font-semibold text-gray-700 mb-2">Inputs</div>

//           <div className="grid gap-3 sm:grid-cols-2">
//             {blueprint.inputs.map((item, idx) => (
//               <div
//                 key={`${item.id}-${idx}`}
//                 className="rounded-lg border border-gray-200 bg-white px-4 py-3"
//               >
//                 <div className="text-[11px] font-semibold text-gray-500 mb-1">
//                   {item.id}
//                 </div>
//                 <div className="text-sm text-gray-900">{item.value}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Phases */}
//       <div className="space-y-5">
//         {blueprint.phases.map((phase, phaseIndex) => (
//           <div
//             key={`${phase.title}-${phaseIndex}`}
//             className="border border-gray-200 rounded-lg overflow-hidden"
//           >
//             {/* Phase header */}
//             <div className="bg-gray-50 px-4 py-2.5 flex items-center justify-between">
//               <div className="font-semibold text-gray-800">
//                 {phaseIndex + 1}. {phase.title}
//               </div>
//               <div className="text-xs text-gray-500">
//                 {phase.steps?.length || 0} steps
//               </div>
//             </div>

//             {/* Steps */}
//             <div className="px-4 py-4">
//               <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//                 {(phase.steps || []).map((step, idx) => (
//                   <div
//                     key={`${phaseIndex}-${idx}`}
//                     className="rounded-lg border border-gray-200 bg-white shadow-sm px-4 py-3"
//                   >
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="text-[11px] font-semibold text-gray-500">
//                         {phase.title} • STEP {idx + 1}
//                       </div>
//                       <div className="h-2 w-2 rounded-full bg-gray-300" />
//                     </div>

//                     <div className="text-sm text-gray-800 leading-snug">{step}</div>

//                     {idx < phase.steps.length - 1 && (
//                       <div className="mt-3 flex items-center gap-2 text-[11px] text-gray-400">
//                         <span className="inline-block h-[1px] flex-1 bg-gray-200" />
//                         <span>next</span>
//                         <span className="inline-block h-[1px] flex-1 bg-gray-200" />
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-4 border-t border-dashed border-gray-200 pt-3 text-xs text-gray-400">
//                 Phase output: {phase.title}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer note */}
//       <div className="mt-6 text-[11px] text-gray-400">
//         Download PDF after generation to export this blueprint.
//       </div>
//     </div>
//   );
// };

// export default BlueprintDiagram;

import React from "react";

interface Input {
  id: string;
  value: string;
}

interface Phase {
  title: string;
  steps?: string[];
}

interface Blueprint {
  title?: string;
  service?: string;
  summary?: string;
  inputs?: Input[];
  phases?: Phase[];
}

interface BlueprintDiagramProps {
  blueprint: Blueprint;
  title?: string;
}

export default function BlueprintDiagram({ blueprint, title }: BlueprintDiagramProps) {
  if (!blueprint?.phases?.length) return null;

  const heading = title || blueprint.title || "Blueprint";

  return (
    <div className="w-full bg-white rounded-xl p-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <div className="text-xl font-bold text-gray-900">{heading}</div>
          <div className="text-sm text-gray-600">
            {blueprint.service ? `Service: ${blueprint.service}` : "Service blueprint"}
          </div>
        </div>

        <div className="text-[11px] px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
          EVO AI
        </div>
      </div>

      {/* Summary */}
      {blueprint.summary && (
        <div className="mb-5 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
          <div className="text-[11px] font-semibold text-gray-500 mb-1">SUMMARY</div>
          <div className="text-sm text-gray-800 leading-snug">{blueprint.summary}</div>
        </div>
      )}

      {/* Inputs */}
      {Array.isArray(blueprint.inputs) && blueprint.inputs.length > 0 && (
        <div className="mb-6">
          <div className="text-[12px] font-semibold text-gray-700 mb-2">Inputs</div>

          <div className="grid gap-3 sm:grid-cols-2">
            {blueprint.inputs.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="rounded-lg border border-gray-200 bg-white px-4 py-3"
              >
                <div className="text-[11px] font-semibold text-gray-500 mb-1">
                  {item.id}
                </div>
                <div className="text-sm text-gray-900">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Phases */}
      <div className="space-y-5">
        {blueprint.phases.map((phase, phaseIndex) => (
          <div
            key={`${phase.title}-${phaseIndex}`}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            {/* Phase header */}
            <div className="bg-gray-50 px-4 py-2.5 flex items-center justify-between">
              <div className="font-semibold text-gray-800">
                {phaseIndex + 1}. {phase.title}
              </div>
              <div className="text-xs text-gray-500">
                {phase.steps?.length || 0} steps
              </div>
            </div>

            {/* Steps */}
            <div className="px-4 py-4">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {(phase.steps || []).map((step, idx) => (
                  <div
                    key={`${phaseIndex}-${idx}`}
                    className="rounded-lg border border-gray-200 bg-white shadow-sm px-4 py-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[11px] font-semibold text-gray-500">
                        {phase.title} • STEP {idx + 1}
                      </div>
                      <div className="h-2 w-2 rounded-full bg-gray-300" />
                    </div>

                    <div className="text-sm text-gray-800 leading-snug">{step}</div>

                    {phase.steps && idx < phase.steps.length - 1 && (
                      <div className="mt-3 flex items-center gap-2 text-[11px] text-gray-400">
                        <span className="inline-block h-[1px] flex-1 bg-gray-200" />
                        <span>next</span>
                        <span className="inline-block h-[1px] flex-1 bg-gray-200" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 border-t border-dashed border-gray-200 pt-3 text-xs text-gray-400">
                Phase output: {phase.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-6 text-[11px] text-gray-400">
        Download PDF after generation to export this blueprint.
      </div>
    </div>
  );
}