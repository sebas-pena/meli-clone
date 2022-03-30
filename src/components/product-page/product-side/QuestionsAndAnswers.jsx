export const QuestionsAndAnswers = () => {
	return (
		<div className="questions-answers">
			<h2>Preguntas y respuestas</h2>
			<h3>¿Qué quieres saber?</h3>
			<div className="faq">
				<button>Costo y tiempo de envío</button>
				<button>Medios de pago y promociones</button>
				<button>Garantía</button>
			</div>
			<div className="make-question">
				<h3>Preguntale al vendedor</h3>
				<form>
					<input
						type="text"
						spellcheck="false"
						autoComplete="off"
						placeholder="Escribe tu pregunta..."
					/>
					<button type="submit">Preguntar</button>
				</form>
			</div>
			<div className="last-questions">
				<h3>Últimas realizadas</h3>
			</div>
		</div>
	)
}
