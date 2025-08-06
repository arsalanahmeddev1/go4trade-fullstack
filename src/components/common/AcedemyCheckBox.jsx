const AcedemyCheckBox = (props) => {
    const { isSelected, onSelect, name, value } = props;

    const handleRadioChange = () => {
        console.log('Radio button clicked, value:', value);
        console.log('onSelect function:', onSelect);
        if (onSelect) {
            onSelect(value, props.img);
        }
    };

    return (
        <div
            className={`acedemy-checkbox px-4 py-4 rounded-[12px] min-h-[260px] flex flex-col justify-between relative transition-all duration-300 transform cursor-pointer ${isSelected ? 'gradient-1 scale-105 shadow-lg shadow-[#80DBB4]/20' : 'border border-[#A0A0A0] hover:border-[#80DBB4] hover:scale-[1.02]'} `}
            onClick={handleRadioChange}
        >
            {/* Selected Badge */}
            {isSelected && (
                <div className="absolute top-2 left-2 bg-[#80DBB4] text-[#01111F] px-2 py-1 rounded-full text-[12px] font-bold animate-pulse">
                    ✓ SELECTED
                </div>
            )}

            <label className="ios-checkbox purple">
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={isSelected}
                    onChange={handleRadioChange}
                />
                <div className="checkbox-wrapper">
                    <div className="checkbox-bg"></div>
                    <svg fill="none" viewBox="0 0 24 24" className="checkbox-icon">
                        <path
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="3"
                            stroke="currentColor"
                            d="M4 12L10 18L20 6"
                            className="check-path"
                        ></path>
                    </svg>
                </div>
            </label>
            <div className="image">
                <img src={props.img} alt="image" />
            </div>
            <div className="text">
                <h5 className={`text-[24px] font-medium ${isSelected ? 'text-white' : 'text-(--base-color)'}`}>{props.heading}</h5>
                <p className={`text-[16px] font-light ${isSelected ? 'text-[#FCFCFC]' : 'text-(--base-color)'}`}>{props.para}</p>
            </div>
        </div>
    )
}

export default AcedemyCheckBox