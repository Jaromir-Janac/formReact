function CheckForm(props){
return (
        <div className='col-sm-6'>
            <label htmlFor={props.for}>{props.text}</label>
            <div className="form-check" id={props.for}>
            {props.data.map(data => 
                        <div key={data.id}>
                        <input className='form-check-input'
                        type={props.type}
                        value={data.value}
                        id={props.for}
                        name={props.name} />
                        <label className='form-check-label'
                        htmlFor={data.id}>
                        {data.text}
                        </label> 
                        </div>                 
                    )} 
            </div>
        </div>

    );
}

export default CheckForm;