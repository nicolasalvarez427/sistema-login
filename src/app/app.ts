import { Component, signal, computed } from '@angular/core';
// import { RouterOutlet } from '@angular/router'; // <-- 1. Eliminamos RouterOutlet
// 1. Importa los componentes que usaremos
import { LoginComponent } from './login/login';
import { PanelAdminComponent } from './panel-admin/panel-admin';
import { CommonModule } from '@angular/common'; // <-- Importante para @if

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Quitamos RouterOutlet de los imports
  imports: [CommonModule, LoginComponent, PanelAdminComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Signal para controlar el estado de autenticación
  readonly isAuthenticated = signal(false);
  readonly currentUser = signal<string | null>(null);
  
  // Computed signal para mostrar mensaje de bienvenida
  readonly welcomeMessage = computed(() => {
    const user = this.currentUser();
    return user ? `¡Bienvenido, ${user}!` : 'Por favor, inicia sesión';
  });

  // Método para manejar el login exitoso
  onLoginSuccess(username: string) {
    this.isAuthenticated.set(true);
    this.currentUser.set(username);
  }

  // Método para cerrar sesión
  logout() {
    this.isAuthenticated.set(false);
    this.currentUser.set(null);
  }
}