import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
        <div>
            <img
                src={imgUrl}
                alt="icon"
                className="w-1/2 h-1/2 object-contain"
            />
            <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
                Title {title}
            </h1>
            <p className="flex-1 mt-[16px] font-normal text-[18px] leading-[32px] text-[#B0B0B0]">
                {subtitle}
            </p>
        </div>
    </div>
);

export default NewFeatures;
