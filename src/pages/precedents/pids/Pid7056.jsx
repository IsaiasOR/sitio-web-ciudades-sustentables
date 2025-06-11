import PidCoverSection from '../components/PidCoverSection.jsx';
import ShowPidContent from '../components/ShowPidContent.jsx';
import { pid7056 } from '../../../utils/Content/PidContent.jsx';
import ShowPDF from '../components/ShowPDF.jsx';

export default function Pid7056() {
    return(
        <main>
            <section>
                <PidCoverSection title="PID 7056" />
                <ShowPidContent text={pid7056} />
                <ShowPDF pdf="PID-7056.pdf" title="PID 7056" />
            </section>
        </main>
    );
}