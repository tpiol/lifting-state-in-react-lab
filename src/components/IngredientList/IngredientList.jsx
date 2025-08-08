// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
    return (

        <ul>
            {props.availableIngredients.map((ingredient, index) => {
                return (
                    <li key={index} style={{backgroundColor: ingredient.color}}>
                      
                            {ingredient.name}
                            <button>add</button>
                     
                    </li>
                )
            })}
        </ul>
    );
};

export default IngredientList;
