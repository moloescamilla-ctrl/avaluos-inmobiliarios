import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PlusCircle, FileText } from 'lucide-react'

const ESTADO_VARIANT = { borrador:'secondary', en_proceso:'warning', completado:'success', firmado:'default' }
const ESTADO_LABEL = { borrador:'Borrador', en_proceso:'En proceso', completado:'Completado', firmado:'Firmado' }
const expedientesDemo = [
  { id:'1', folio:'AV-2026-001', direccion:'Av. Reforma 123, Col. Juárez, CDMX', tipo:'Casa habitación', estado:'en_proceso', fecha:'2026-06-20' },
  { id:'2', folio:'AV-2026-002', direccion:'Calle Insurgentes 45, Guadalajara, Jal.', tipo:'Local comercial', estado:'borrador', fecha:'2026-06-22' },
]

export function ExpedientesListPage() {
  return (
    <div className="p-6 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="text-xl font-bold text-gray-900">Expedientes</h1><p className="text-sm text-gray-500 mt-0.5">Todos tus avalúos</p></div>
        <Link to="/expedientes/nuevo"><Button><PlusCircle className="h-4 w-4" />Nuevo avalúo</Button></Link>
      </div>
      <div className="space-y-3">
        {expedientesDemo.map((exp)=>(
          <Link key={exp.id} to={`/expedientes/${exp.id}`}>
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all flex items-center gap-4">
              <FileText className="h-8 w-8 text-gray-300 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2"><span className="font-mono text-xs text-gray-500">{exp.folio}</span><Badge variant={ESTADO_VARIANT[exp.estado]}>{ESTADO_LABEL[exp.estado]}</Badge></div>
                <p className="font-medium text-sm text-gray-900 mt-0.5 truncate">{exp.direccion}</p>
                <p className="text-xs text-gray-400">{exp.tipo} · {exp.fecha}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}