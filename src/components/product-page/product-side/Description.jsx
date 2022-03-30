import { useParams } from "react-router-dom"
import { useGetProductDescription } from "../../../hooks/useGetProductDescription"

export const Description = () => {
	const { productId } = useParams()
	const descriptionPlainText = useGetProductDescription(productId)

	const description = descriptionPlainText
		? descriptionPlainText.replaceAll(/\n/g, "<br/>")
		: ""

	const styles = {
		borderTop: "1px solid #e5e5e5",
		borderBottom: "1px solid #e5e5e5",
		padding: "40px 0",
		margin: "0 40px",
	}

	return (
		<div className="product-description" style={styles}>
			<h2>Descripción</h2>

			<p dangerouslySetInnerHTML={{ __html: description }}></p>
		</div>
	)
}
