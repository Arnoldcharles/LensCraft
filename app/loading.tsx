export default function Loading() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: 40,
        height: 40,
        border: '4px solid #ccc',
        borderTop: '4px solid #000',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style>
        {`@keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }`}
      </style>
    </div>
  );
}
