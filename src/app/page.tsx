import { Bottom_Section, Middle_Section, Top_Section } from '@/components';

export default function page() {
    return (
        <div className='bg-slate-50'>
            <Top_Section />
            <Middle_Section />
            <Bottom_Section />
        </div>
    );
}
