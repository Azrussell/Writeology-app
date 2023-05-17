
const Header = () =>  {
    const styles = {
        header: {
            display: "flex",
            backgroundColor: "white",
            justifyContent: "space-around",
            alignItems: "center",
            color: 'black'
        }
    }

    return (
        <header style={styles.header}>
            <section> ✏️ Writeology X</section>
            <section>Cart(0) 👤</section>
            <hr />
        </header>
    )
}

export default Header;