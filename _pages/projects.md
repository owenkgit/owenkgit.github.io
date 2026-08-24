---
layout: page
title: Projects
permalink: /projects/
nav: true
nav_order: 2
---

<div class="projects">

<h2 class="year">2026</h2>

<!-- Auto Simulation -->
<div class="project-item" id="auto-simulation">
  <div class="project-media">
    <img src="/assets/img/autosim_demo.gif" alt="Automated robot simulation demo">
  </div>
  <div class="project-body">
    <span class="project-badge">Robotics · Agents</span>
    <h4 class="project-title">Automated Robot Simulation Pipeline</h4>
    <p class="project-summary">An agent monitors simulation results, analyzes failed episodes, identifies underlying causes, and continuously updates VLM instructions to improve future performance. Inspired by Andrej Karpathy's vision of automated AI research.</p>
    <div class="project-tags">
      <span>VLM</span><span>LIBERO</span><span>Self-Improving Agents</span>
    </div>
    <div class="project-links">
      <a href="https://github.com/owenk3/autosimulation" target="_blank" rel="noopener noreferrer">GitHub <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
  </div>
</div>

<!-- Robot Learning -->
<div class="project-item" id="robot-learning">
  <div class="project-media project-media-icon">
    <i class="fa-solid fa-people-arrows"></i>
  </div>
  <div class="project-body">
    <span class="project-badge">Robot Learning · CMU 16-867</span>
    <h4 class="project-title">Preference-Based Reward Learning &amp; Human-Robot Interaction</h4>
    <p class="project-summary">How robots learn what people want. Part one recovers a human's hidden preference vector from demonstrated trajectories via the Boltzmann observation model and Bayesian inference. Part two trains a reward model directly from pairwise trajectory comparisons using Bradley-Terry &mdash; the objective underlying RLHF &mdash; instead of noisy absolute ratings.</p>
    <div class="project-tags">
      <span>Inverse RL</span><span>Bayesian Inference</span><span>Bradley-Terry</span><span>MetaWorld</span>
    </div>
    <div class="project-links">
      <a href="https://medium.com/@owen-k/walkthrough-of-human-robot-interaction-99beac7ac5c0" target="_blank" rel="noopener noreferrer">HRI Walkthrough <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      <a href="https://medium.com/@owen-k/preference-based-reward-learning-in-robotics-from-implicit-inference-to-explicit-comparison-7103dbdd992f" target="_blank" rel="noopener noreferrer">Preference-Based Reward Learning <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
  </div>
</div>

<h2 class="year">2025</h2>

<!-- LLM System -->
<div class="project-item" id="llm-system">
  <div class="project-media">
    <img src="/assets/img/llmsystem.png" alt="GPU streaming multiprocessor architecture">
  </div>
  <div class="project-body">
    <span class="project-badge">LLM Systems · CMU 11-868</span>
    <h4 class="project-title">Optimizing Transformer CUDA Kernels</h4>
    <p class="project-summary">What happens inside the GPU during transformer inference &mdash; how memory moves, how threads collaborate, how kernels fuse. Custom CUDA kernels for Softmax and LayerNorm via warp-level reduction, FlashAttention with CUDA tiling integrated into MiniTorch, and a multi-teacher distillation pipeline.</p>
    <div class="project-tags">
      <span>CUDA</span><span>FlashAttention</span><span>Kernel Fusion</span><span>Distillation</span>
    </div>
    <div class="project-links">
      <a href="https://medium.com/@owen-k/inside-the-gpu-how-i-optimized-transformer-cuda-kernels-36361112888b" target="_blank" rel="noopener noreferrer">Read article <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
  </div>
</div>

<h2 class="year">2024</h2>

<!-- On-Device ML -->
<div class="project-item" id="on-device">
  <div class="project-media">
    <img src="/assets/img/on-device.png" alt="NVIDIA Jetson Nano board">
  </div>
  <div class="project-body">
    <span class="project-badge">Edge ML · CMU 11-767</span>
    <h4 class="project-title">On-Device Machine Learning: Shrinking Models for the Real World</h4>
    <p class="project-summary">How quantization, pruning, and hardware constraints shape what actually runs on the edge. Benchmarked compression strategies against a roofline model to separate memory- from compute-bound bottlenecks, profiling YOLOv5s on a Jetson Nano under tight memory budgets.</p>
    <div class="project-tags">
      <span>Quantization</span><span>Pruning</span><span>TensorRT</span><span>Jetson Nano</span>
    </div>
    <div class="project-links">
      <a href="https://medium.com/@owen-k/on-device-machine-learning-shrinking-models-for-the-real-world-8710a340a390" target="_blank" rel="noopener noreferrer">Read article <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
  </div>
</div>

<!-- LLM Agent Applications -->
<div class="project-item">
  <div class="project-media">
    <img src="/assets/img/voice_assistant.png" alt="Voice assistant application">
  </div>
  <div class="project-body">
    <span class="project-badge">LLM Applications</span>
    <h4 class="project-title">LLM Agent Applications</h4>
    <p class="project-summary">Automated services built on GPT models: ad copy generation tuned to product details and brand tone, multi-language document summarization, blog and social content creation, PDF/YouTube summarization, and a scheduling assistant.</p>
    <div class="project-tags">
      <span>Python</span><span>Streamlit</span><span>OpenAI API</span>
    </div>
    <div class="project-links">
      <a href="https://github.com/owenk3/ChatGPT-application-python" target="_blank" rel="noopener noreferrer">GitHub <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
  </div>
</div>

<!-- Data Ingestion and AI Infrastructure -->
<div class="project-item">
  <div class="project-media">
    <img src="/assets/img/system_architecture.png" alt="System architecture diagram">
  </div>
  <div class="project-body">
    <span class="project-badge">ML Infrastructure</span>
    <h4 class="project-title">Data Ingestion and AI Infrastructure</h4>
    <p class="project-summary">Scalable data pipeline and multi-model serving infrastructure: 10+ models on Triton (TensorRT, ONNX), 100M+ events/day through Kafka and Spark Streaming, Kubernetes auto-scaling on GCP, and an automated train/validate/deploy pipeline at 99.9% uptime.</p>
    <div class="project-tags">
      <span>Triton</span><span>Kafka</span><span>Spark</span><span>Kubernetes</span><span>GCP</span><span>Airflow</span>
    </div>
  </div>
</div>

<h2 class="year">2023</h2>

<!-- Virtual Assistant -->
<div class="project-item">
  <div class="project-media">
    <img src="/assets/img/talkmotion.ai.png" alt="3D conversational avatar">
  </div>
  <div class="project-body">
    <span class="project-badge">Multimodal AI</span>
    <h4 class="project-title">Virtual Assistant &mdash; 3D Realistic Conversational Avatar</h4>
    <p class="project-summary">Real-time chatbot agent combining LLM, TTS, and 3D animation. Cut diffusion-based animation inference from 10s to 0.1s, served the full stack through Triton Ensemble, and ran it on highly available k8s infrastructure across GCP and Azure with a Level 2 MLOps pipeline.</p>
    <div class="project-tags">
      <span>PyTorch</span><span>Triton</span><span>DeepSpeed</span><span>LangChain</span><span>LlamaIndex</span><span>k8s</span>
    </div>
  </div>
</div>

<h2 class="year">2021</h2>

<!-- Automated Learning System -->
<div class="project-item">
  <div class="project-media">
    <img src="/assets/img/automl.png" alt="AutoML system">
  </div>
  <div class="project-body">
    <span class="project-badge">AutoML</span>
    <h4 class="project-title">Automated Learning System</h4>
    <p class="project-summary">Contributed to an AutoML platform covering automated feature engineering, model selection and hyperparameter tuning, ensemble strategies, and performance optimization for production deployment.</p>
    <div class="project-tags">
      <span>Scikit-learn</span><span>XGBoost</span><span>LightGBM</span><span>Optuna</span>
    </div>
  </div>
</div>

</div>
