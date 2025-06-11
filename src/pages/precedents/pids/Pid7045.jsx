import PidCoverSection from '../components/PidCoverSection.jsx';
import ShowPidContent from '../components/ShowPidContent.jsx';
import { pid7045 } from '../../../utils/Content/PidContent.jsx';
import ShowPDF from '../components/ShowPDF.jsx';

export default function Pid7045() {
    return(
        <main>
            <section>
                <PidCoverSection title="PID 7045" />
                <ShowPidContent text={pid7045} />
                <ShowPDF pdf="PID-7045.pdf" title="PID 7045" />
            </section>
        </main>
    );
}