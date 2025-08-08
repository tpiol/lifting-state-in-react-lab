// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
    return (

        <ul>
            {props.availableIngredients.map((ingredient, index) => {
                return (
                    <li style={{backgroundColor: ingredient.color}}>
                      
                            {ingredient.name}
                            <button>add</button>
                     
                    </li>
                )
            })}
        </ul>
    );
};

export default IngredientList;
