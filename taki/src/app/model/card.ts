import { CardColor } from "app/model/cardColor";

export class Card {
    private _cardColor: CardColor;
    private _value: number;

	public get value(): number {
		return this._value;
	}

	public set value(value: number) {
		this._value = value;
	}

	public get cardColor(): CardColor {
		return this._cardColor;
	}

	public set cardColor(value: CardColor) {
		this._cardColor = value;
	}
    

}