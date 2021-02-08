import { Spinner } from 'react-bootstrap';

export default function Loader() {
  return (
    <div
      style={{
        width: '100%',
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2 style={{ marginRight: '15px' }}>Loading</h2>
      <Spinner animation="border" role="status" />
    </div>
  );
}
