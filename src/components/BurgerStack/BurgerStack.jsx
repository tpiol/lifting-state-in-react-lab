// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    return (
        <ul>
            {props.burger.map((ingredient, index) => {
                return (
                    <li key={index} style={{ backgroundColor: ingredient.color }}>
                        {ingredient.name}
                       <button onClick={() => props.removeFromBurger(ingredient)}>x</button>
                    </li>
                );
            })}
        </ul>
    );
};

export default BurgerStack;
