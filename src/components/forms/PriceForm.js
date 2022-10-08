function PriceForm(props) {
    return (
        <div className="col-sm-4 mt-1">
            {props.data.map(data =>
                <div key={data.id} name={data.id}>
                <label htmlFor={data.id} className='col-form-label'>{data.label}</label>
                <div>
                <input readOnly type={data.type} className="form-control" id={data.id} placeholder={data.placeholder} value={props.input}/>
                </div> 
                </div>          
            )}
        </div>
    );
}

export default PriceForm;