import classes from './Layout.module.css';

function Layout (props) {
    return (
    <div className='App'>
        <main className={classes.main}>
        <h1 className="display-3">Royal Sun Hotel</h1>
        <form className="formReservation">
          <h3>Reservation form</h3>
        {props.children}
        </form>
        </main>
    </div>
    );
}

export default Layout;