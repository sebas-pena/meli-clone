import questionConnectorIcon from "../../../assets/svgs/question connector.svg"
import { questionsAndAnswers } from "../../../mocks/questionsAndAnswers"
export const QuestionsAndAnswers = () => {
	const parseTime = (date) => {
		let newFormat = new Date(Date.parse(date)).toLocaleString()

		return newFormat.split(",")[0]
	}

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
						spellCheck="false"
						autoComplete="off"
						placeholder="Escribe tu pregunta..."
					/>
					<button type="submit">Preguntar</button>
				</form>
			</div>
			<div className="last-questions">
				<h3>Últimas realizadas</h3>
				<ul className="questions">
					{questionsAndAnswers.map(({ question, id, status, answer }) => (
						<li key={id}>
							<p>{question}</p>
							{status === "ANSWERED" ? (
								<div>
									<img src={questionConnectorIcon} alt="" />
									<p>{answer.text}</p>
									<span>{parseTime(answer.date)}</span>
								</div>
							) : (
								""
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
