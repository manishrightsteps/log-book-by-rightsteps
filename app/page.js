import ChangelogProfessional from '@/components/changelog-professional';
import { loadConfig, loadAllChangelogs } from '@/lib/config-loader';

export default function Home() {
  const config = loadConfig();
  const changelogs = loadAllChangelogs();

  return <ChangelogProfessional config={config} changelogs={changelogs} />;
}
