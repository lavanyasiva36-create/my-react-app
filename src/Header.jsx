export default function Header() {
  return (
    <header style={{
      backgroundColor: '#227381',
      padding: '20px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2>MyWebSite🌐</h2>
      <nav>
        <span style={{ marginRight: '15px', cursor: 'pointer' }}>Home</span>
        <span style={{ marginRight: '15px', cursor: 'pointer' }}>About</span>
        <span style={{ cursor: 'pointer' }}>Contact</span>
      </nav>
    </header>
  )
}