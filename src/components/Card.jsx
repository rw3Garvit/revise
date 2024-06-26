function Card({ title, desc }) {
  return (
    <div class="card" style={{ width: "18 rem" }}>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">{desc}</p>
        <a href="#" class="card-link">
          Card link
        </a>
        <a href="#" class="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}

export default Card;
