import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

type ContactControlName = 'nombre' | 'email' | 'telefono' | 'tipoEvento' | 'mensaje';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class ContactoComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly sending = signal(false);
  protected readonly sent = signal(false);
  protected readonly errorMessage = signal('');

  protected readonly eventTypes = [
    'Shopping',
    'Empresa',
    'Activación de marca',
    'Evento privado',
    'Otro',
  ];

  protected readonly form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.minLength(8)]],
    tipoEvento: ['', Validators.required],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected submit(): void {
    this.sent.set(false);
    this.errorMessage.set('');

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);

    const value = this.form.getRawValue();
    const subject = encodeURIComponent(`Consulta web Papá Noel Argentina - ${value.tipoEvento}`);
    const body = encodeURIComponent(
      `Nombre: ${value.nombre}\nEmail: ${value.email}\nTeléfono: ${value.telefono}\nTipo de evento: ${value.tipoEvento}\n\nMensaje:\n${value.mensaje}`
    );

    window.location.href = `mailto:giacheproducciones@gmail.com?subject=${subject}&body=${body}`;

    window.setTimeout(() => {
      this.sending.set(false);
      this.sent.set(true);
      this.form.reset();
    }, 700);
  }

  protected hasError(controlName: ContactControlName): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }
}
