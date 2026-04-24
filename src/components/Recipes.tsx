export function Recipe(props) {
    return (
        <div className="recipe flex-md-row mb-4 box-shadow h-md-250">
            <h3>{props.recipe.name}</h3>
            <ol>
                {props.recipe.ingredients.map((ingredient, i) => {
                    return (
                    <li key={i}>{ingredient}</li>
                    )
                })}
            </ol>
        </div>
    )
}