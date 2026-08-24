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
<div class="row" style="margin-bottom: 3em;">
  <div class="col-sm-8">
    <h4>Automated Robot Simulation Pipeline</h4>
    <p><strong>Overview:</strong> An automated robot simulation pipeline where an agent monitors simulation results, analyzes failed episodes, identifies underlying causes, and continuously updates VLM instructions to improve future performance. Inspired by Andrej Karpathy's vision of automated AI research.</p>
    <p><strong>Timeline:</strong> 2026</p>
    <div class="links">
      <a href="https://github.com/owenk3/autosimulation" class="btn btn-sm z-depth-0" role="button">GitHub</a>
    </div>
  </div>
</div>

<!-- Robot Learning -->
<div class="row" style="margin-bottom: 3em;">
  <div class="col-sm-8">
    <h4>Robot Learning: Preference-Based Reward Learning &amp; Human-Robot Interaction</h4>
    <p><strong>Overview:</strong> Two-part series from CMU's Human-Robot Interaction course (16-867) on how robots learn what people want. Part one covers inverse reinforcement learning: recovering a human's hidden preference vector from demonstrated trajectories via the Boltzmann observation model and Bayesian (MAP) inference. Part two moves to preference-based reward learning, training a reward model directly from pairwise trajectory comparisons using the Bradley-Terry model &mdash; the same objective underlying RLHF &mdash; instead of relying on noisy absolute ratings or expert demonstrations.</p>
    <p><strong>Technologies:</strong> Inverse Reinforcement Learning, Bayesian Inference, Bradley-Terry Optimization, MetaWorld</p>
    <p><strong>Timeline:</strong> 2026</p>
    <div class="links">
      <a href="https://medium.com/@owen-k/walkthrough-of-human-robot-interaction-99beac7ac5c0" class="btn btn-sm z-depth-0" role="button">Article: HRI Walkthrough</a>
      <a href="https://medium.com/@owen-k/preference-based-reward-learning-in-robotics-from-implicit-inference-to-explicit-comparison-7103dbdd992f" class="btn btn-sm z-depth-0" role="button">Article: Preference-Based Reward Learning</a>
    </div>
  </div>
</div>

<h2 class="year">2025</h2>

<!-- LLM System -->
<div class="row" style="margin-bottom: 3em;">
  <div class="col-sm-8">
    <h4>LLM System: Optimizing Transformer CUDA Kernels</h4>
    <p><strong>Overview:</strong> Built during CMU's LLM Systems course, this project digs into what happens inside the GPU during transformer inference &mdash; how memory moves, how threads collaborate, and how kernels are fused. Implemented custom CUDA kernels for Softmax and LayerNorm using warp-level reduction, integrated FlashAttention with CUDA-based tiling into MiniTorch, and built a multi-teacher knowledge distillation pipeline.</p>
    <p><strong>Technologies:</strong> CUDA, GPU Kernel Optimization, FlashAttention, Knowledge Distillation</p>
    <p><strong>Timeline:</strong> 2025</p>
    <div class="links">
      <a href="https://medium.com/@owen-k/inside-the-gpu-how-i-optimized-transformer-cuda-kernels-36361112888b" class="btn btn-sm z-depth-0" role="button">Article</a>
    </div>
  </div>
</div>

<h2 class="year">2024</h2>

<!-- On-Device ML -->
<div class="row" style="margin-bottom: 3em;">
  <div class="col-sm-8">
    <h4>On-Device Machine Learning: Shrinking Models for the Real World</h4>
    <p><strong>Overview:</strong> Based on CMU's On-Device Machine Learning course, this project explores how quantization, pruning, and hardware constraints shape what actually runs on the edge. Benchmarked model compression strategies (dynamic quantization, static pruning) against a roofline model to identify memory- vs. compute-bound bottlenecks, deploying and profiling YOLOv5s on an NVIDIA Jetson Nano under tight memory budgets.</p>
    <p><strong>Technologies:</strong> Quantization, Pruning, TensorRT, NVIDIA Jetson Nano, YOLOv5</p>
    <p><strong>Timeline:</strong> 2024</p>
    <div class="links">
      <a href="https://medium.com/@owen-k/on-device-machine-learning-shrinking-models-for-the-real-world-8710a340a390" class="btn btn-sm z-depth-0" role="button">Article</a>
    </div>
  </div>
</div>

<!-- LLM Agent Applications -->
<div class="row" style="margin-bottom: 3em;">
  <div class="col-sm-4">
    <img src="/assets/img/voice_assistant.png" width="100%" style="border: 1px solid #ddd;">
  </div>
  <div class="col-sm-8">
    <h4>LLM Agent Applications</h4>
    <p><strong>Overview:</strong> Developed various automated services leveraging OpenAI's GPT model, including ad copy generation, document summarization, and virtual assistant functionalities.</p>
    <p><strong>Features:</strong></p>
    <ul>
      <li>Ad Copy Generation: Generate tailored ad copy based on product details and brand tone</li>
      <li>Document Summarization: Multi-language document summarization service</li>
      <li>Content Creation: Blog posts and Instagram captions</li>
      <li>PDF & YouTube Summarization: Extract concise summaries from documents and videos</li>
      <li>Virtual Assistant: Task handling including scheduling and reminders</li>
    </ul>
    <p><strong>Technologies:</strong> Python, Streamlit, OpenAI API</p>
    <p><strong>Timeline:</strong> September 2024 - January 2025</p>
    <div class="links">
      <a href="https://github.com/owenk3/ChatGPT-application-python" class="btn btn-sm z-depth-0" role="button">GitHub</a>
    </div>
  </div>
</div>

<!-- Data Ingestion and AI Infrastructure -->
<div class="row" style="margin-bottom: 3em;">
  <div class="col-sm-4">
    <img src="/assets/img/system_architecture.png" width="100%" style="border: 1px solid #ddd;">
  </div>
  <div class="col-sm-8">
    <h4>Data Ingestion and AI Infrastructure</h4>
    <p><strong>Overview:</strong> Built scalable data pipeline and multi-model serving infrastructure for AI-powered services.</p>
    <p><strong>Key Achievements:</strong></p>
    <ul>
      <li>Multi-model serving: Deployed 10+ AI models on Triton Inference Server (TensorRT, ONNX)</li>
      <li>Real-time data pipeline: Processed 100M+ events/day with Kafka and Spark Streaming</li>
      <li>Auto-scaling infrastructure: Kubernetes-based deployment on GCP</li>
      <li>MLOps pipeline: Automated model training, validation, and deployment with 99.9% uptime</li>
    </ul>
    <p><strong>Technologies:</strong> Python, FastAPI, Triton, Kafka, Spark, Kubernetes, Docker, GCP, Airflow, MLFlow</p>
    <p><strong>Timeline:</strong> April 2024 - August 2024</p>
  </div>
</div>

<h2 class="year">2023</h2>

<!-- Virtual Assistant -->
<div class="row" style="margin-bottom: 3em;">
  <div class="col-sm-4">
    <img src="/assets/img/talkmotion.ai.png" width="100%" style="border: 1px solid #ddd;">
  </div>
  <div class="col-sm-8">
    <h4>Virtual Assistant - 3D Realistic & Conversational Avatar</h4>
    <p><strong>Overview:</strong> Developed and deployed an advanced, real-time chatbot agent integrated with 3D animation capabilities, combining LLM, TTS, and 3D animation technologies.</p>
    <p><strong>Key Achievements:</strong></p>
    <ul>
      <li>Model Optimization: Reduced diffusion-based 3D animation inference time from 10 seconds to 0.1 seconds</li>
      <li>Cloud Infrastructure: Architected k8s-based high-availability infrastructure on GCP and Azure</li>
      <li>Real-time Integration: Deployed LLM, TTS, and 3D animation models using Triton Ensemble</li>
      <li>MLOps Implementation: Established Level 2 MLOps pipeline with CI/CD processes</li>
    </ul>
    <p><strong>Technologies:</strong> Python, FastAPI, PyTorch, Triton, ONNX, PEFT, DeepSpeed, Langchain, LlamaIndex, OpenSearch, k8s, MLFlow, Kafka, AWS, GCP</p>
    <p><strong>Timeline:</strong> September 2023 - August 2024</p>
  </div>
</div>

<h2 class="year">2021</h2>

<!-- Automated Learning System -->
<div class="row" style="margin-bottom: 3em;">
  <div class="col-sm-4">
    <img src="/assets/img/automl.png" width="100%" style="border: 1px solid #ddd;">
  </div>
  <div class="col-sm-8">
    <h4>Automated Learning System Project Contribution</h4>
    <p><strong>Overview:</strong> Contributed to building an AutoML system for automated machine learning pipeline.</p>
    <p><strong>Key Contributions:</strong></p>
    <ul>
      <li>Feature engineering automation</li>
      <li>Model selection and hyperparameter tuning</li>
      <li>Ensemble learning strategies</li>
      <li>Performance optimization for production deployment</li>
    </ul>
    <p><strong>Technologies:</strong> Python, Scikit-learn, XGBoost, LightGBM, Optuna</p>
    <p><strong>Timeline:</strong> 2021</p>
  </div>
</div>

</div>
