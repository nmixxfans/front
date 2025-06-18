import { DefaultContainer } from '@/shared/ui/DefaultContainer';
import { SignupBox } from '@/features/auth/ui/SignupBox';

export default function Signup() {
  return (
    <section>
      <DefaultContainer>
        <SignupBox />
      </DefaultContainer>
    </section>
  )
}
