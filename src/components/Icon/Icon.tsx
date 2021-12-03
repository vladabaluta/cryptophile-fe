import IIcon from '../../interfaces/IIcon';

const Icon = ({ src, alt, ...props }: IIcon) => {
	return <img {...props} src={src} alt={alt} />;
};

export default Icon;
