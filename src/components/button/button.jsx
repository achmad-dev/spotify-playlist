import { Icon } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

//make sure to import the correct icon
const SpotifyButton = ({
    leftIcon,
    children,
    variant = "default",
    isLoading,
    ...props
}) => {
    return (
        <Button className='btn' {...props}>
            {isLoading ? (
                <>
                    <Icon loading name='spinner' />
                </>
            ) : (
                <>
                    {leftIcon} {children}
                </>
            )}
        </Button>
    );
};

export default SpotifyButton;
