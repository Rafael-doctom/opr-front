import { UserProvider } from './userContext';
import { RequirementsProvider } from './requirementsContext';

const providers = [UserProvider, RequirementsProvider];

export default function AppContext(props) {
    const { children, ...rest } = props;
    return (
        <>
            {providers.reduceRight((acc, Comp) => {
                return <Comp {...rest}>{acc}</Comp>
            }, children)}
        </>
    )
}