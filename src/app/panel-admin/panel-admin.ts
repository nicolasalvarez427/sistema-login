import { Component, input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Importar
import { BotonPersonalizadoComponent } from '../boton-personalizado/boton-personalizado';

@Component({
  selector: 'app-panel-admin',
  standalone: true,
  imports: [CommonModule, BotonPersonalizadoComponent], // <-- Añadir
  templateUrl: './panel-admin.html',
  styleUrl: './panel-admin.css'
})
export class PanelAdminComponent {
  // Input signal para recibir el nombre de usuario
  readonly username = input<string | null>(null);
  
  // Signals para el estado del panel
  readonly activeSection = signal<'dashboard' | 'users' | 'settings'>('dashboard');
  readonly notifications = signal(3);
  readonly lastLogin = signal(new Date());
  
  // Computed signals para datos derivados
  readonly welcomeTitle = computed(() => {
    const user = this.username();
    return user ? `Panel de Administración - ${user}` : 'Panel de Administración';
  });
  
  readonly formattedLastLogin = computed(() => {
    return this.lastLogin().toLocaleString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  });
  
  readonly sectionTitle = computed(() => {
    const section = this.activeSection();
    switch (section) {
      case 'dashboard': return '📊 Dashboard';
      case 'users': return '👥 Gestión de Usuarios';
      case 'settings': return '⚙️ Configuración';
      default: return '📊 Dashboard';
    }
  });

  // Método para cambiar de sección
  changeSection(section: 'dashboard' | 'users' | 'settings') {
    this.activeSection.set(section);
  }
  
  // Método para simular acción
  performAction(action: string) {
    alert(`Acción ejecutada: ${action}`);
  }
}