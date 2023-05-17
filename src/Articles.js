


const Articles = () =>  {
    const styles = {

        articles: {
            display:"flex",
            backgroundColor: "black",
            justifyContent: "space-around",
            alignItems: "center",
            color: "white"
    
        }
    }

    return (
        <articles style={styles.articles}>
            <section>TIPS</section>
            <section>5 ways to improve your digital project management</section>
            <section>John Carter</section>
            <section>🕐 June 16, 2022</section>
        </articles>
    )

}

export default Articles;