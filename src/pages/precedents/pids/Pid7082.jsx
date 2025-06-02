import PidCoverSection from '../components/PidCoverSection.jsx';
import ShowPidContent from '../components/ShowPidContent.jsx';
import { pid7082 } from '../../../utils/Content/PidContent.jsx';

export default function Pid7082() {
    return(
        <main>
            <section>
                <PidCoverSection title="PID 7082" />
                <ShowPidContent text={pid7082} />
            </section>
        </main>
    );
}