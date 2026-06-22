import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase'
import { Building2 } from 'lucide-react'

export function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-4">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Avalúos MX</h1>
          <p className="text-sm text-gray-500 mt-1">Sistema profesional de valuación inmobiliaria</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa, variables: { default: { colors: { brand: '#2563eb', brandAccent: '#1d4ed8' } } } }}
            localization={{ variables: { sign_in: { email_label: 'Correo electrónico', password_label: 'Contraseña', button_label: 'Iniciar sesión' }, sign_up: { email_label: 'Correo electrónico', password_label: 'Contraseña', button_label: 'Crear cuenta' }, forgotten_password: { link_text: '¿Olvidaste tu contraseña?', button_label: 'Enviar instrucciones' } } }}
            providers={[]}
          />
        </div>
      </div>
    </div>
  )
}