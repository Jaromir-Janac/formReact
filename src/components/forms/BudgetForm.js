function BudgetForm(props) {
    return (
        <div className="col-sm-4 mt-1">
            {props.data.map(data =>
                <div key={data.id} name={data.id}>
                <label htmlFor={data.id} className='col-form-label'>{data.label}</label>
                <div>
                <input type={data.type} className="form-control" id={data.id} placeholder={data.placeholder}/>
                </div> 
                </div>          
            )}
        </div>
    );
}

export default BudgetForm;