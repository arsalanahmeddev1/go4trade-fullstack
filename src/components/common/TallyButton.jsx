import { BubbleButton } from './index';

const TallyButton = ({ 
    children = "", 
    className = "my-btn text-white font-medium bg-blue-gradient hover:opacity-60 transition",
    formId = "npqlrV",
    layout = "modal",
    hideTitle = "1",
    autoClose = "0",
    formEventsForwarding = "1",
    Tag = "button",
    href = "",
    target = "",
    bubbleColor = "#fff",
    parent_Class = "",
    onClick,
    ...props 
}) => {
    return (
        <BubbleButton
            Tag={Tag}
            href={href}
            target={target}
            className={className}
            bubbleColor={bubbleColor}
            parent_Class={parent_Class}
            onClick={onClick}
            data-tally-open={formId}
            data-tally-layout={layout}
            data-tally-hide-title={hideTitle}
            data-tally-auto-close={autoClose}
            data-tally-form-events-forwarding={formEventsForwarding}
            {...props}
        >
            {children}
            
        </BubbleButton>
    );
};

export default TallyButton;
