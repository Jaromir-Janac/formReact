function DateForm(props) {
    return (
        <div className="col-sm-4">
            <label htmlFor={props.for} className="col-form-label">{props.text}</label>
            <div>
                <input type="date" className="form-control" id={props.for} />
            </div>
        </div>
    );
}

export default DateForm;