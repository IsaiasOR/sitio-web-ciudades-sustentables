import PidCoverSection from '../components/PidCoverSection.jsx';
import ShowPidContent from '../components/ShowPidContent.jsx';
import { pidNovel7037 } from '../../../utils/Content/PidContent.jsx';

export default function PidNovel7037() {
    return(
        <main>
            <section>
                <PidCoverSection title="PID Novel 7037" />
                <ShowPidContent text={pidNovel7037} />
            </section>
        </main>
    );
}