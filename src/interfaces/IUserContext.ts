export default interface IUserContext {
	favoriteCoins: string[];
	addFavoriteCoin: (coinCode: string) => void;
	removeFavoriteCoin: (coinCode: string) => void;
}
