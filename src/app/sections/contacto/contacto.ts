import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
})
export class Contacto {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  sending = false;
  sent = false;
  errorMsg = '';

  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: [''],
    tipoEvento: ['Shopping'],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
    origen: ['web-cg-producciones'], // útil para trazabilidad
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sending = true;
    this.errorMsg = '';
    // Ajustá la URL luego al endpoint real (Nest/Resend/Vercel/Cloud Run)
    this.http.post('/api/contact', this.form.value).subscribe({
      next: () => {
        this.sent = true;
        this.sending = false;
        this.form.reset({ tipoEvento: 'Shopping' });
      },
      error: (err) => {
        this.errorMsg = 'No pudimos enviar tu mensaje. Probá nuevamente más tarde.';
        this.sending = false;
        console.error(err);
      },
    });
  }
}
