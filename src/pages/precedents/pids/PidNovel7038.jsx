import PidCoverSection from '../components/PidCoverSection.jsx';
import ShowPidContent from '../components/ShowPidContent.jsx';
import { pidNovel7038 } from '../../../utils/Content/PidContent.jsx';

export default function PidNovel7038() {
    return(
        <main>
            <section>
                <PidCoverSection title="PID Novel 7038" />
                <ShowPidContent text={pidNovel7038} />
            </section>
        </main>
    );
}