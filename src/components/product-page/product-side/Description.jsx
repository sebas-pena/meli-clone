import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProductDescription } from "../../../services/getProductDescription"

export const Description = () => {
	const [description, setDescription] = useState("")
	const params = useParams()

	useEffect(() => {
		async function getDescription() {
			let description = await getProductDescription(params.productId)
			description = description.replaceAll(/\n/g, "<br/>")
			setDescription(description)
		}

		getDescription()
	}, [])

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
