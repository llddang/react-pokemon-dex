import { useEffect, useState } from "react";
import { MdClear } from "react-icons/md";
import PokemonUsageGuideModalS from "./PokemonUsageGuideModal.styled";
import Typography from "@/components/common/Typography";
import Button from "@/components/common/Button";

export default function PokemonUsageGuideModal() {
  const [isClosed, setIsClosed] = useState(false);

  function handleCloseButtonClick() {
    setIsClosed(true);
    localStorage.setItem("isModalClosed", "true");
  }

  useEffect(() => {
    const isModalClosed = Boolean(localStorage.getItem("isModalClosed"));
    setIsClosed(isModalClosed);
  }, []);
  if (isClosed) return null;
  return (
    <PokemonUsageGuideModalS.Container>
      <PokemonUsageGuideModalS.Head>
        <Typography $variant="h1">사용 가이드</Typography>
        <Button $variant="ghost" onClick={handleCloseButtonClick}>
          <MdClear />
        </Button>
      </PokemonUsageGuideModalS.Head>
      <PokemonUsageGuideModalS.Content>
        <PokemonUsageGuideModalS.InfoGroup>
          <Typography $variant="h2">with keyboard</Typography>
          <img src="/key_asdf.png" alt="ASDF 키 이미지" />
          <img src="/key_arrow.png" alt="방향 키 이미지" />
          <Typography>
            ASDF 키와 화살표 키를 통해서 포켓몬 카드를 <strong>이동</strong>할
            수 있습니다.
          </Typography>
          <img src="/key_enter.png" alt="ENTER 키 이미지" />
          <Typography>
            Enter 키를 통해서 포켓몬을 <strong>추가</strong>하거나{" "}
            <strong>삭제</strong>할 수 있습니다.
          </Typography>
        </PokemonUsageGuideModalS.InfoGroup>
        <PokemonUsageGuideModalS.InfoGroup>
          <Typography $variant="h2">with Mobile/Tablet</Typography>
          <img src="/key_vertical_scroll.png" alt="세로 스크롤 이미지" />
          <Typography>
            세로 드래그를 통해 도감을 위/아래로 <strong>이동</strong>할 수
            있습니다.
          </Typography>
          <Typography>
            포켓몬 카드를 터치하여 포켓몬을 <strong>선택</strong>할 수 있습니다.
          </Typography>
          <Typography>
            선택된 포켓몬이 대하여 추가/삭제하기 버튼을 터치하여{" "}
            <strong>조작</strong>할 수 있습니다.
          </Typography>
        </PokemonUsageGuideModalS.InfoGroup>
      </PokemonUsageGuideModalS.Content>
    </PokemonUsageGuideModalS.Container>
  );
}
