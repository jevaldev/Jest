export default function Modal({ dialogRef }) {
  return (
    <dialog ref={dialogRef}>
      <h2>Agregar nueva tarea</h2>
      <p>Este es un text de ejemplo que da igual</p>
      <button onClick={() => dialogRef.current.close()}>Cerrar</button>
    </dialog>
  );
}
