import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/styles.css'
function MainGuest() {


    return (
        <div className='wrapper'>
            <Header name={'Login'} route={'/login'}/>
            <main className="main">
                <div className="main__container">
                    <section className="page__main main">

                        <div className="main__content">
                            <h1 className="main__title"><span>Welcome to our guest page!</span></h1>
                            <p className="main__text">Here you will find a convenient and simple environment for storing your notes. Create an account to have the ability to create, edit, and organize your notes in an easy way. Our website offers you free usage and access to your account from any device.</p>
                            <p className="main__text">Capture your ideas, to-do lists, reminders, or any information you need. We ensure data storage in a secure environment and quick access to it whenever you need it.</p>
                            <p className="main__text">Use our note-taking website for convenient management of your ideas and records. May your notes always be at your fingertips!</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>

    );
}

export default MainGuest;