//     Создайте карточку для избранного поста в блог. Она должна принимать
//     категорию, заголовок, дату, описание, ссылку, изображение и alt для него.
//     Дата должна быть датой, в формате "21 сентября 2021 г."

{/* <div class="card flex-md-row mb-4 box-shadow h-md-250">
  <div class="card-body d-flex flex-column align-items-start">
    <strong class="d-inline-block mb-2 text-primary">%CATEGORY%</strong>
    <h3 class="mb-0">
      <a class="text-dark" href="%LINK%">Избранный пост</a>
    </h3>
    <div class="mb-1 text-muted">%DATE%</div>
    <p class="card-text mb-auto">%DESCRIPTION%</p>
    <a href="%LINK%">Continue reading</a>
  </div>
  <img class="card-img-right flex-auto d-none d-md-block" alt="%ALT%" style="width: 200px; height: 250px;" src="%IMAGE%">
</div> */}

export function Card(props) {
    return (
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">{props.card.category}</strong>
                <h3 className="mb-0">
                    <a className="text-dark" href={props.card.link}>{props.card.title}</a>
                </h3>
                <div className="mb-1 text-muted">{props.card.date}</div>
                <p className="card-text mb-auto">{props.card.description}</p>
                <a href={props.card.link}>Continue reading</a>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block" alt="%ALT%" style={{width: "200px", height: "250px"}} src={props.card.img}/>
        </div>
    )
}