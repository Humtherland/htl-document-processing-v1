import { IsNotEmpty } from "class-validator";

export class CreateDocumentDto {
	@IsNotEmpty()
	to: string;

	@IsNotEmpty()
	subject: string;

	@IsNotEmpty()
	text: string;
}
