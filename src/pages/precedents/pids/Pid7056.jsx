import PidCoverSection from '../components/PidCoverSection.jsx';
import ShowPidContent from '../components/ShowPidContent.jsx';
import { pid7056 } from '../../../utils/Content/PidContent.jsx';

export default function Pid7056() {
    return(
        <main>
            <section>
                <PidCoverSection title="PID 7056" />
                <ShowPidContent text={pid7056} />
                <div className="flex justify-center items-center mb-30">
                    <iframe src={`${import.meta.env.BASE_URL}PID-7056.pdf`} width="60%" height="600px" className="border-1 border-gray-200" />
                </div>
            </section>
        </main>
    );
}